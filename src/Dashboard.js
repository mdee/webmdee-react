import React, { useState, useEffect, useCallback} from 'react'
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, DialogTitle, DialogActions, DialogContent, DialogContentText, Dialog, TextField, Link, Drawer, AppBar, Toolbar, IconButton, Typography, Paper, Grid, InputLabel, MenuItem, FormControl, Select, FormControlLabel, Checkbox, TableContainer, TableCell, TableHead, TableBody, TableRow, Table, Button, TableFooter, TablePagination, Snackbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Alert from '@material-ui/lab/Alert';
import {  Link as RouterLink } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';


import {
  CartesianGrid,
  XAxis,
  Label,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import * as d3TimeFormat from 'd3-time-format';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
import * as d3Scale from 'd3-scale';
import Divider from "@material-ui/core/Divider";

// Display format function for dates
const chartTimeFormat = d3TimeFormat.timeFormat('%m/%d/%y');

const Dashboard = () => {

  function addDollarSign(spendRange) {
    const spendRangeSplit = spendRange.split('-');
    if (spendRangeSplit.length === 1) {
      // Split it on space, and a dollar sign
      const secondSplit = spendRangeSplit[0].split(' ');
      return `${secondSplit[0]} $${secondSplit[1]}`;
    } else {
      return `$${spendRangeSplit[0]}-$${spendRangeSplit[1]}`;
    }
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 250
    }
  }));

  const defaultLoadedCampaignName = 'BERNIE 2020';
  const pickerTimeFormat = d3TimeFormat.timeFormat('%Y-%m-%d');
  const initialDateString = pickerTimeFormat(new Date());
  const spendRanges = ['≤ $100', '$100-$1k', '$1k-$50k', '$50k-$100k', '> $100k'];
  const impressionRanges = ['≤ 10k', '100k-1M', '10k-100k', '1M-10M', '> 10M'];
  const adTypes = ['Image', 'Text', 'Video'];
  // Default to loading the previous 2 months of data
  const monthDelta = 2;

  // Color scale for the ad spend + impression ranges
  let adSpendImpressionRangeColorScale = d3Scale.scaleOrdinal()
    .domain(spendRanges).range(d3ScaleChromatic.schemeCategory10);
  // Color scale fo the ad type area chart
  let adTypeColorScale = d3Scale.scaleOrdinal()
    .domain(adTypes).range(d3ScaleChromatic.schemeAccent);

  // Hook, hook, where's the hook!?
  // This is all presidential campaigns
  const [presidentialCampaigns, setPresidentialCampaigns] = useState([]);
  // User selected presidential campaign
  const [presidentialCampaign, setPresidentialCampaign] = useState('');
  // User controlled date range
  const [startDate, setStartDate] = useState(initialDateString);
  const [endDate, setEndDate] = useState(initialDateString);
  // These are used to limit date choices on the inputs
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  // Boolean to show the spend range of ads (as bars)
  const [showSpendRanges, setShowSpendRanges] = useState(false);
  // Boolean to show the impression range of ads (as bars)
  const [showImpressionRanges, setShowImpressionRanges] = useState(false);
  // Boolean to show ad types (as area)
  const [showAdTypes, setShowAdTypes] = useState(true);
  // User-controlled width of bars in bar charts
  const [barSize, setBarSize] = useState(4);
  // User selected ad type to display on chart
  const [adType, setAdType] = useState('');
  // Ads fetched from Django vv
  const [ads, setAds] = useState([]);
  // Current "page" of ads to display on details table
  const [adDetailsPage, setAdDetailsPage] = useState(0);
  // Boolean to retrieve individual donation data from FEC records
  const [fetchIndividualDonations, setFetchIndividualDonations] = useState(true);
  // Boolean to also retrieve ad details for details table
  const [fetchAdDetails, setFetchAdDetails] = useState(true);
  // Boolean to control if the success snack bar is shown after fetching data
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // Boolean to control if the side drawer is open
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Boolean to control if the help dialog is displayed
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
  // Array of data to display on the leftmost chart
  const [dateAdStackedBars, setDateAdStackedBars] = useState([]);
  // Array of data to display on the rightmost chart
  const [donationDataStackedBars, setDonationDataStackedBars] = useState(null);
  // Boolean to indicate that the user has tried to set a bar size that doesn't work, and to show an error msg
  const [invalidBarSize, setInvalidBarSize] = useState(false);
  const [noDonations, setNoDonations] = useState(true);
  const [loading, setLoading] = useState(true);


  const handleTableChangePage = (event, newPage) => {
    setAdDetailsPage(newPage);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setAdDetailsPage(0);
  };

  const [rowsPerPage, setRowsPerPage] = useState(10);

  function validateBarSize(newBarSize) {
    if (newBarSize < 1 || newBarSize > 13) {
      setInvalidBarSize(true);
    } else {
      setInvalidBarSize(false);
      setBarSize(newBarSize);
    }
  }

  const memoizedUrlParameters = useCallback(
    () => {
      let urlParams = `campaign_name=${presidentialCampaign}&start_date=${startDate}&end_date=${endDate}`;
      if (adType !== '') {
        urlParams += `&ad_type=${adType}`;
      }
      return urlParams;
    }, [presidentialCampaign, startDate, endDate, adType]);

  function fetchData() {
    setLoading(true);
    const urlParams = memoizedUrlParameters();
    axios.get('https://bernie-ads-backend.herokuapp.com/api/date_ads_metadata/?'+urlParams).then(({ data: adDateData }) => {
      const chartDates = adDateData.map((date, index) => {
        let d = {dateString: chartTimeFormat(new Date(date.date))};
        date.spend_ranges.forEach(sr => {
          d[addDollarSign(sr.label)] = sr.count;
        });
        date.impressions_ranges.forEach(ir => {
          d[ir.label] = ir.count;
        });
        date.ad_types.forEach(at => {
          d[at.label] = at.count;
        });
        return d;
      });
      setDateAdStackedBars(chartDates);
      setSnackbarOpen(true);
      setDrawerOpen(false);
      setLoading(false);
    });
    if (fetchIndividualDonations) {
      let noDonationsFound = true;
      axios.get('https://bernie-ads-backend.herokuapp.com/api/date_donations_metadata/?'+urlParams).then(({ data }) => {
        const donationData = data.map((d) => {
          if (d.count > 0) {
            noDonationsFound = false;
          }
          return {dateString: chartTimeFormat(new Date(d.date)), donations: d.count};
        });
        setDonationDataStackedBars(donationData);
        setNoDonations(noDonationsFound);
      });
    }
    if (fetchAdDetails) {
      axios.get('https://bernie-ads-backend.herokuapp.com/api/ads/?'+urlParams).then(({ data: ads }) => {
        ads.forEach((a) => {
          a.spend_range = addDollarSign(a.spend_range);
          a.start_date = chartTimeFormat(new Date(a.start_date));
          a.end_date = chartTimeFormat(new Date(a.end_date));
        });
        setAds(ads);
      });
    }
  }

  useEffect(() => {
    // Fetch all presidential campaigns
    const urlParams = `?month_delta=${monthDelta}`;
    Promise.allSettled([
      axios.get('https://bernie-ads-backend.herokuapp.com/api/campaigns/'),
      axios.get('https://bernie-ads-backend.herokuapp.com/api/date_extent/' + urlParams)
    ]).then((result) => {
      const campaignData = result[0].value.data;
      const dateData = result[1].value.data;
      setPresidentialCampaigns(campaignData);
      setPresidentialCampaign(defaultLoadedCampaignName);
      setMinDate(dateData.min_date);
      setMaxDate(dateData.max_date);
      setEndDate(dateData.max_date);
      setStartDate(dateData.start_date);
      let urlParams = `campaign_name=${defaultLoadedCampaignName}&start_date=${dateData.start_date}&end_date=${dateData.max_date}`;

      axios.get('https://bernie-ads-backend.herokuapp.com/api/date_ads_metadata/?'+urlParams).then(({ data: adDateData }) => {
        const chartDates = adDateData.map((date, index) => {
          let d = {dateString: chartTimeFormat(new Date(date.date))};
          date.spend_ranges.forEach(sr => {
            d[addDollarSign(sr.label)] = sr.count;
          });
          date.impressions_ranges.forEach(ir => {
            d[ir.label] = ir.count;
          });
          date.ad_types.forEach(at => {
            d[at.label] = at.count;
          });
          return d;
        });
        setDateAdStackedBars(chartDates);
        setSnackbarOpen(true);
        setDrawerOpen(false);
        setLoading(false);
      });
      let noDonationsFound = true;
      axios.get('https://bernie-ads-backend.herokuapp.com/api/date_donations_metadata/?'+urlParams).then(({ data }) => {
        const donationData = data.map((d) => {
          if (d.count) {
            noDonationsFound = false;
          }
          return {dateString: chartTimeFormat(new Date(d.date)), donations: d.count};
        });
        setNoDonations(noDonationsFound);
        setDonationDataStackedBars(donationData);
      });
      axios.get('https://bernie-ads-backend.herokuapp.com/api/ads/?'+urlParams)
        .then(({ data: ads }) => {
          ads.forEach((a) => {
            a.spend_range = addDollarSign(a.spend_range);
            a.start_date = chartTimeFormat(new Date(a.start_date));
            a.end_date = chartTimeFormat(new Date(a.end_date));
          });
          setAds(ads);
        })
        .catch(() => {
          // It's possible that the request failed because Heroku is waking up. So, wait a few seconds and try again
          setTimeout(() => {
            axios.get('https://bernie-ads-backend.herokuapp.com/api/ads/?'+urlParams)
              .then(({ data: ads }) => {
                ads.forEach((a) => {
                  a.spend_range = addDollarSign(a.spend_range);
                  a.start_date = chartTimeFormat(new Date(a.start_date));
                  a.end_date = chartTimeFormat(new Date(a.end_date));
                });
                setAds(ads);
              });
          }, 3000);
        });

    });
  },[]);

  const toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

  const classes = useStyles();

  const sideBar = () => (
    <div className={classes.drawer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="presidential-campaign">Presidential Campaign</InputLabel>
        <Select
          labelId="presidential-campaign"
          value={presidentialCampaign}
          disabled={!presidentialCampaigns.length}
          onClick={(e) => setPresidentialCampaign(e.target.value)}
          onBlur={(e) => setPresidentialCampaign(e.target.value)}
        >
          <MenuItem/>
          {presidentialCampaigns.map(campaign => (
            <MenuItem key={campaign.name} value={campaign.name}>
              {campaign.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/YY"
            label="Start Date"
            id="start-date-picker-inline"
            margin="normal"
            value={startDate}
            onChange={(d) => { setStartDate(pickerTimeFormat(d._d)) }}
            minDate={minDate}
            maxDate={maxDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl className={classes.formControl}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/YY"
            margin="normal"
            id="end-date-picker-inline"
            label="End Date"
            value={endDate}
            onChange={(d) => { setEndDate(pickerTimeFormat(d._d)) }}
            minDate={minDate}
            maxDate={maxDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="ad-type">Ad Type</InputLabel>
        <Select
          labelId="ad-type"
          value={adType}
          disabled={!adTypes.length}
          onClick={(e) => setAdType(e.target.value)}
          onChange={(e) => setAdType(e.target.value)}
          onBlur={(e) => setAdType(e.target.value)}
        >
          <MenuItem value=""/>
          {adTypes.map(adType => (
            <MenuItem key={adType} value={adType}>
              {adType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={fetchIndividualDonations}
              onClick={(e) => setFetchIndividualDonations(e.target.checked)}
              onChange={(e) => setFetchIndividualDonations(e.target.checked)}
              onBlur={(e) => setFetchIndividualDonations(e.target.checked)}
              color="primary"
            />
          }
          label="Retrieve Individual Donations"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={fetchAdDetails}
              onClick={(e) => setFetchAdDetails(e.target.checked)}
              onChange={(e) => setFetchAdDetails(e.target.checked)}
              onBlur={(e) => setFetchAdDetails(e.target.checked)}
              color="primary"
            />
          }
          label="Retrieve Ad Details"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchData}
          disabled={!presidentialCampaigns.length}
        >
          Submit
        </Button>
      </FormControl>
      <Divider />

      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={showSpendRanges}
              onClick={(e) => setShowSpendRanges(e.target.checked)}
              onChange={(e) => setShowSpendRanges(e.target.checked)}
              onBlur={(e) => setShowSpendRanges(e.target.checked)}
              color="primary"
            />
          }
          label="Show Ad Spend"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={showAdTypes}
              onClick={(e) => setShowAdTypes(e.target.checked)}
              onChange={(e) => setShowAdTypes(e.target.checked)}
              onBlur={(e) => setShowAdTypes(e.target.checked)}
              color="primary"
            />
          }
          label="Show Ad Types"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={showImpressionRanges}
              onClick={(e) => setShowImpressionRanges(e.target.checked)}
              onChange={(e) => setShowImpressionRanges(e.target.checked)}
              onBlur={(e) => setShowImpressionRanges(e.target.checked)}
              color="primary"
            />
          }
          label="Show Ad Impressions"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="chart-bar-width"
          label="Chart Bar Width"
          type="number"
          error={invalidBarSize}
          value={barSize}
          onChange={e => validateBarSize(+e.target.value)}
          helperText="Bar width must be in the range [1, 13]"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </div>
  );

  function handleHelpDialogClose() {
    setHelpDialogOpen(false);
  }
  function handleHelpDialogOpen() {
    setHelpDialogOpen(true);
  }

  const helpDialog = () => (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={helpDialogOpen}
      onClose={handleHelpDialogClose}
      aria-labelledby="help-dialog-title"
    >
      <DialogTitle id="help-dialog-title">Ads + Donation Data Tool</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This tool allows you to visualize publicly available data for several 2020 presidential candidates.
          <p>You can see how many
            online ad campaigns each candidate has run on Google over the past several months, each one's price range, impressions target, and ad type (such as text or video).</p>
          FEC data for individual donations can also be retrieved through Q3 2019. Simply click <MenuIcon/> up top to begin exploring the data!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleHelpDialogClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className="dashboard">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link component={RouterLink} to="/" color="inherit">WebMDee.com</Link>
          </Typography>

        </Toolbar>
      </AppBar>
      { loading ? <LinearProgress /> : ''}
      <Drawer open={drawerOpen} onClose={toggleDrawer()}>
        {sideBar()}
      </Drawer>
      {helpDialog()}
      <Grid container>
        <Grid item xs={2}/>
        <Grid item xs={8}>
          <div style={{textAlign: "center", margin: "10px 0 10px 0"}}>
            <Typography variant="h6" className={classes.title}>{presidentialCampaign} Ads + Donation Data Tool</Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{textAlign: "right"}}>
            <IconButton color="primary" onClick={handleHelpDialogOpen}>
              <HelpIcon/>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {!dateAdStackedBars.length ? (
            <div>
              <Alert severity="info">Click "Submit" in order to retrieve Google Ads data for the {presidentialCampaign} campaign.</Alert>
            </div>
          ) : (
            <ResponsiveContainer width="100%" aspect={1.5}>
              <ComposedChart
                data={dateAdStackedBars}
                margin={{
                  top: 20, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <XAxis dataKey="dateString" type="category"/>
                <YAxis
                  type="number"
                >
                  <Label
                    value="Number Of Ad Campaigns"
                    position="insideLeft"
                    angle={-90}
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>
                {
                  showAdTypes ? adTypes.map(at => {
                      return <Area angle={45} textAnchor="end" dataKey={at} stackId="ad-type" type="monotone" key={at} stroke={adTypeColorScale(at)} fill={adTypeColorScale(at)}/>})
                    : ''
                }
                {
                  showSpendRanges ? spendRanges.map(sr => {
                    return <Bar dataKey={sr} stackId="spend" key={sr} stroke="lightGray" fill={adSpendImpressionRangeColorScale(sr)} barSize={barSize}/>
                  }) : ''
                }
                {
                  showImpressionRanges ? impressionRanges.map(ir => {
                    return <Bar dataKey={ir} stackId="impressions" key={ir} stroke="lightGray" fill={adSpendImpressionRangeColorScale(ir)} barSize={barSize}/>
                  }) : ''
                }
              </ComposedChart>
            </ResponsiveContainer>
            )
          }
        </Grid>
        <Grid item xs={12} sm={6}>
          {
            donationDataStackedBars === null || !fetchIndividualDonations ?
              (
                <div>
                  <Alert severity="info">Check "Retrieve Individual Donations" in order to retrieve FEC donation data from individuals for the {presidentialCampaign} campaign.</Alert>
                </div>
              )
              :
              (
                fetchIndividualDonations && noDonations ?
                  (
                    <Alert severity="info">No data for individual donations to the {presidentialCampaign} campaign from {chartTimeFormat(new Date(startDate))} - {chartTimeFormat(new Date(endDate))}.</Alert>
                  )
                  :
                  (
                    <ResponsiveContainer width="100%" aspect={1.5}>
                      <BarChart
                        data={donationDataStackedBars}
                        margin={{
                          top: 20, right: 30, left: 20, bottom: 5,
                        }}
                        barSize={barSize}
                      >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        <XAxis dataKey="dateString" type="category"/>
                        <YAxis type="number">
                          <Label
                            value="Number Of Donations"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: 'middle' }}
                          />
                        </YAxis>
                        <Bar dataKey="donations" stroke="lightGray" fill="steelblue"/>
                      </BarChart>
                    </ResponsiveContainer>
                  )
              )
          }
        </Grid>
        <Grid item xs={12} sm={12} style={{marginTop: "10px"}}>
          { ads.length && fetchAdDetails ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Spend Range</TableCell>
                    <TableCell>Impressions Range</TableCell>
                    <TableCell>Ad Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    ads.slice(adDetailsPage * rowsPerPage, adDetailsPage * rowsPerPage + rowsPerPage).map(ad => (
                      <TableRow key={ad.id}>
                        <TableCell component="th" scope="row">
                          {ad.start_date}
                        </TableCell>
                        <TableCell>{ad.end_date}</TableCell>
                        <TableCell>{ad.spend_range}</TableCell>
                        <TableCell>{ad.impressions_range}</TableCell>
                        <TableCell><a href={ad.link} target="_blank" rel="noopener noreferrer">{ad.ad_type}</a></TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 50]}
                      rowsPerPage={rowsPerPage}
                      count={ads.length}
                      page={adDetailsPage}
                      onChangePage={handleTableChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          ) : (
            <Alert severity="info">Check "Retrieve Ad Details" to display ad details here.</Alert>
          )
          }
        </Grid>
        <Grid item xs={12}>
          <div style={{margin: "10px 0 10px 0", textAlign: "center"}}>Ad data is from Google's <a target="_blank" rel="noopener noreferrer" href="https://transparencyreport.google.com/political-ads/region/US">Transparency Report</a>, individual donation data is from <a target="_blank" rel="noopener noreferrer" href="https://www.fec.gov/data/browse-data/?tab=bulk-data">fec.gov</a></div>
        </Grid>
      </Grid>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {
            fetchIndividualDonations ?
              <div>Retrieved ad campaign and individual donation data for {presidentialCampaign} from {chartTimeFormat(new Date(startDate))} - {chartTimeFormat(new Date(endDate))}
              </div>
              :
              <div>Retrieved ad campaign data for {presidentialCampaign} from {chartTimeFormat(new Date(startDate))} - {chartTimeFormat(new Date(endDate))}
              </div>
          }
        </Alert>
      </Snackbar>
    </div>
  )

};

export default Dashboard;