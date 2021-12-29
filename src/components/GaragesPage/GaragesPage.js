import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {Input, Divider, notification, Table} from 'antd';
import {compact} from 'lodash';
import {connect} from 'react-redux';
import {commonActions} from '../../store/actions';

const wildScreenFields = ['_id', 'mispar_mosah', 'cod_sug_mosah', 'sug_mosah', 'ktovet', 'mikud', 'cod_miktzoa', 'miktzoa', 'menahel_miktzoa', 'rasham_havarot', 'rank']

const GaragesPage = ({garageInfo: {loaded, loading, data, error}, getGarageInfo}) => {
  const [query, setQuery] = useState();

  const columns = useMemo(() => compact(data?.result?.fields).map(({id}) => ({
    title: id,
    dataIndex: id,
    sorter: true,
    responsive: wildScreenFields.includes(id) && ['lg'],
  })), [data]);

  const onSearch = useCallback(() => {
    getGarageInfo({
      q: query,
    })
  }, [getGarageInfo, query]);

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
        {(loaded && !loading) && (
            <Table
                rowKey={({_id}) => _id}
                dataSource={compact(data?.result?.records)}
                columns={columns}
                tableLayout="auto"
                size="small"
            />
        )}
      </div>
  )
}

export default connect(({common: {garageInfo}}) => ({garageInfo}), commonActions)(GaragesPage);
