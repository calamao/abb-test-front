import { constants } from 'constants/constants';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IPart } from 'server/models/part';
import { SocketService } from 'server/socket';
import styled from 'styled-components/macro';
import { Feature } from './components/Feature';

export function Part() {
  const [data, setData] = useState((null as unknown) as IPart);

  useEffect(() => {
    initSocketAndSubscribe(setData);
  }, []);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`${constants.baseUrl}/part/all`)
      .then(response => response.json())
      // get first element of data
      // TODO: just get the part needed via different endpoint
      .then((data: { parts: IPart[] }) => setData(getFirstPart(data)));
  }, []);

  return (
    <>
      <PartPage>
        <h1>{data?.name}</h1>

        <Features>
          {data?.features?.map((f, index) => (
            <Feature feature={f} key={index}></Feature>
          ))}
        </Features>
      </PartPage>
      {/* <div className="card-body">Data received: {JSON.stringify(data)}</div> */}
    </>
  );
}

const getFirstPart = (serverData: { parts: IPart[] }) => serverData?.parts[0];

const PartPage = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  min-height: 320px;
  padding: 0 20px;

  h1 {
    width: 100%;
  }
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
`;

function initSocketAndSubscribe(onPartReceived: (part: IPart) => void) {
  const socketService = new SocketService();
  socketService.init();

  socketService.onPartEvent(parts => {
    // console.log(parts);
    onPartReceived(parts[0]);
  });
}
