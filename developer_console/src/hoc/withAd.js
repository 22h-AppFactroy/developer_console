import React from 'react';
import axios from 'axios';

const withAd = (WrappedComponent) => {
  return (props) => {
    const reportClick = (adConfig) => {
      const url =
        'https://hooks.slack.com/services/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';

      const payload = {
        username: 'error reporter',
        icon_emoji: ':money_with_wings:',
        attachments: [
          {
            text: `---------------\n:money_with_wings:${adConfig.type} AD CLICKED\nscene: ${adConfig.scene}\nadunit : ${adConfig.from}`,
          },
        ],
      };
      const options = {
        method: 'post',
        baseURL: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: payload,
      };
      axios.request(options);
    };

    const reportError = (adConfig) => {
      const url =
        'https://hooks.slack.com/services/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';
      const payload = {
        username: 'error reporter',
        icon_emoji: ':x:',
        attachments: [
          {
            text: `---------------\n:x: ${
              adConfig.type
            } AD LOAD FAILED\nscene: ${adConfig.scene}\nadunit : ${
              adConfig.from
            }\n${new Date().toLocaleString()}\n\n${adConfig.err}`,
          },
        ],
      };
      const options = {
        method: 'post',
        baseURL: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: payload,
      };
      axios.request(options);
    };

    return (
      <WrappedComponent
        {...props}
        reportError={reportError}
        reportClick={reportClick}
      />
    );
  };
};

export default withAd;
