import React from 'react';

const GroupSelect = ({ value, onChange, groups }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select group</option>
      {groups.map(group => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
  );
};

export default GroupSelect;