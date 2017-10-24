import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const textfieldStyle = {
  paddingLeft: 24,
  top: -12,
  width: 400,
};

const itemWrapperStyle = {
  fontSize: 24,
  padding: 48,
  display: 'flex',
  alignItems: 'center',
};

const handleChange = ({ oldSettings, newSetting, value, onSettingsChange }) => {
  const newSettings = {...oldSettings};
  newSettings[newSetting] = value;
  onSettingsChange(newSettings);
};

const InputMode = ({ settings, onSettingsChange }) => {
  console.log('topic is: ', settings.topic);
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div style={itemWrapperStyle}>
        <div style={{ width: 160, display: 'flex', justifyContent: 'center' }}>Topic</div>
        <TextField
          style={textfieldStyle}
          value={settings.topic}
          floatingLabelText="Topic"
          onChange={(_, newTopic) => {
            if (onSettingsChange){
              handleChange({ oldSettings: settings, newSetting: 'topic', value: newTopic, onSettingsChange })
            }
          }}
        />
      </div>
      <div style={itemWrapperStyle}>
        <div style={{ width: 160, display: 'flex', justifyContent: 'center' }}>Sampling Rate</div>
        <TextField
          style={textfieldStyle}
          floatingLabelText="Sampling Rate (ms)"
          onChange={(_, newSampleRate) => {
            handleChange({ oldSettings: settings, newSetting: 'sampleRate', value: newSampleRate, onSettingsChange })
          }}
        />
      </div>
    </div>
  );
}

InputMode.propTypes = {
  settings: PropTypes.object,
  onSettingsChange: PropTypes.func,
};

export default InputMode;