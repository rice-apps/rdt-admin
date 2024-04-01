import React, { useState } from 'react';
import { Radio, TreeSelect } from 'antd';

const AttendanceSwitch = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">Alphabetical</Radio.Button>
        <Radio.Button value="topRight">Relevance</Radio.Button>
        <Radio.Button value="bottomLeft">Most Recent</Radio.Button>
        <Radio.Button value="bottomRight">Least Recent</Radio.Button>
      </Radio.Group>

        {/* <TreeSelect
            showSearch
            dropdownStyle={{
            maxHeight: 400,
            overflow: 'auto',
            minWidth: 300,
            }}
            placeholder="Please select"
            dropdownMatchSelectWidth={false}
            placement={placement}
            allowClear
            treeDefaultExpandAll
            treeData={treeData}
        /> */}
    </>
  );
};
export default AttendanceSwitch;