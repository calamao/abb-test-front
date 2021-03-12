import * as React from 'react';
import { ElementState, IFeature } from 'server/models/part';
import styled from 'styled-components/macro';
import { ReactComponent as CorrectIcon } from '../../assets/ok.svg';
import { ReactComponent as WarnIcon } from '../../assets/medium_priority.svg';
import { ReactComponent as ErrorIcon } from '../../assets/cancel.svg';

interface Props {
  feature: IFeature;
}

export function Feature(props: Props) {
  const { feature } = props;
  return (
    <>
      <FeatureMain>
        <FeatureHeader className={'header ' + getStateClass(feature?.state)}>
          {feature.name}
        </FeatureHeader>
        <FeatureContent className="content">
          <table>
            <thead>
              <tr>
                <th>Control</th>
                <th>Dev</th>
                <th>Dev Out Total</th>
                <th>
                  {
                    // 'State icon cell'
                  }
                </th>
              </tr>
            </thead>
            <tbody>
              {feature?.controls.map((c, index) => (
                <tr key={index}>
                  <td>{c.name}</td>
                  <td>{c.dev}</td>
                  <td>{c.devOutTotal}</td>
                  <td>
                    {/* <CorrectIcon className={'state-icon ' + getStateClass(c.state)} /> */}
                    {getControlStateIcon(c.state)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FeatureContent>
      </FeatureMain>
    </>
  );
}

const getControlStateIcon = (state: ElementState) => {
  const icons = {};
  icons[`${ElementState.Correct}`] = <CorrectIcon className={'state-icon'} />;
  icons[`${ElementState.Warning}`] = <WarnIcon className={'state-icon'} />;
  icons[`${ElementState.Error}`] = <ErrorIcon className={'state-icon'} />;
  return icons[`${state}`];
};

// eslint-disable-next-line prettier/prettier
const getStateClass = (state: ElementState | undefined) => 
  state === ElementState.Correct
    ? 'correct'
    : state === ElementState.Warning
    ? 'warn'
    : 'error';

enum HeaderColor {
  Correct = 'rgb(50,154,93)',
  Warn = 'rgb(233,199,4)',
  Error = 'rgb(240,47,64)',
}

const FeatureMain = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */

  .header {
    /* height: 30px; */
    padding: 10px 10px;

    &.error {
      background-color: ${HeaderColor.Error};
    }
    &.warn {
      background-color: ${HeaderColor.Warn};
    }
    &.correct {
      background-color: ${HeaderColor.Correct};
    }
  }

  .content {
    flex: 1;
    height: 500px;
    width: 400px;
    background-color: #d8d8d8;
    padding: 10px 10px;

    table {
      width: 100%;
      td {
        text-align: center;
      }
    }
  }

  .state-icon {
    width: 20px;
    fill: green;
  }
`;

const FeatureHeader = styled.div``;
const FeatureContent = styled.div``;
