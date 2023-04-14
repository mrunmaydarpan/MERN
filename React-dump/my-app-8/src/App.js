import React from 'react';
// import Header from './Component/Header';
import vdo from '../src/Video/DJI_0343.MP4'
import { useRef } from 'react';
import VideoPlayer from './Component/VideoPlayer';

function App() {
  let vdoRef = useRef();

  <div>
    <VideoPlayer ref={vdoRef} video={vdo} />
  </div>
}

export default App;
