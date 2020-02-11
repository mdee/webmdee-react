import React from 'react';
import Ad from './Ad.js'

const AdResults = ({ ads }) => {

  return (
    <div className="results-table">
      <table>
        <thead>
        <tr>
          <th>Start Date</th>
          <th>End Date</th>
          {/*<th>Days Active</th>*/}
          <th>Spend Range</th>
          <th>Impressions Range</th>
          <th>Link</th>
        </tr>
        </thead>
        <tbody>
        {
          ads.map(ad => {
            return (
              <Ad
                key={ad.id}
                startDate={ad.start_date}
                endDate={ad.end_date}
                daysCount={ad.number_of_days}
                spendRange={ad.spend_range}
                impressionsRange={ad.impressions_range}
                link={ad.link}
              />
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
};

export default AdResults;