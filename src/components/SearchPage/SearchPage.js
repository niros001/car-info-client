import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {Input, Divider, Empty, notification} from 'antd';
import {compact, first, keys} from 'lodash';
import {connect} from 'react-redux';
import {commonActions} from '../../store/actions';

const SearchPage = ({vehicleInfo: {loaded, loading, data, error}, getVehicleInfo}) => {
  const [query, setQuery] = useState();

  const vehicle = useMemo(() => first(compact(data?.result?.records)), [data]);

  const onSearch = useCallback(() => {
    getVehicleInfo({
      limit: 1,
      q: query,
    })
  }, [getVehicleInfo, query]);

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Something went wrong...',
        description: error?.statusText,
      })
    }
  }, [error])

  return (
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum pharetra, condimentum quam ut, malesuada arcu.
          Sed vitae magna purus. Mauris vulputate semper nisi. Sed vitae ultricies erat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem diam, sagittis et tempor et, varius sed elit.
          Pellentesque id enim dignissim, maximus augue vitae, accumsan dui. Mauris commodo lobortis commodo.
          Nam consequat tristique augue, sit amet suscipit enim ornare vel. Integer sollicitudin neque a egestas consequat.
          Nunc at velit enim. Suspendisse ac elementum tellus. Phasellus dui neque, aliquam quis vulputate ut, facilisis nec neque.
          Ut sed tortor augue.
        </div>
        <Divider />
        <Input.Search
            loading={loading}
            onSearch={onSearch}
            placeholder="Search..."
            onChange={({target: {value}}) => setQuery(value)}
            style={{maxWidth: 250}}
        />
        {keys(vehicle).map((key) => (
            <div key={key}>
              <b>{key}:&nbsp;</b>
              <span>{vehicle[key]}</span>
            </div>
        ))}
        {(loaded && !loading && !vehicle) && <Empty />}
      </div>
  )
}

export default connect(({common: {vehicleInfo}}) => ({vehicleInfo}), commonActions)(SearchPage);
