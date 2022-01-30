import React, {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Table, Button} from 'antd';
import {FilePdfOutlined} from '@ant-design/icons';
import {commonActions} from '../../store/actions';

const Reports = ({user, getHistoryReports, historyReports}) => {
  useEffect(() => {
    if (user.data) {
      getHistoryReports()
    }
  }, [user.data, getHistoryReports])
  const {t} = useTranslation();

  const columns = useMemo(() => [
    {
      title: t('Created date'),
      dataIndex: 'createdAt',
      render: (text) => new Date(text).toDateString(),
    },
    {
      title: t('Car number'),
      dataIndex: 'carNumber',
    },
    {
      title: t('File'),
      dataIndex: 'data',
      render: ({data}) => <Button icon={<FilePdfOutlined />} onClick={() => {
        window.open(URL.createObjectURL(new Blob([new Uint8Array(data)], {type: 'application/pdf'})))
      }}>{t('Show report')}</Button>
    },
  ], [t]);
  return (
      <Table
          rowKey={({_id}) => _id}
          columns={columns}
          dataSource={historyReports.data}
          loading={historyReports.loading}
          size="small"
          pagination={false}
      />
  )
}

export default connect(({auth: {user}, common: {historyReports}}) => ({user, historyReports}), commonActions)(Reports);
