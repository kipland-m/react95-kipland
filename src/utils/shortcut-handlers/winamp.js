import Webamp from 'webamp';

const startWebamp = () => {
  const webamp = new window.Webamp({
      initialTracks: [{
          metaData: {
              artist: "Drexciya",
              title: "Hi-Tide"
          },
          url: `${process.env.PUBLIC_URL}/drexciya-hi-tide.mp3`,
      }]
  });

  webamp.onClose(() => {
      webamp.dispose();
  })

  webamp.renderWhenReady(document.getElementById('winamp-container'));
}


export default startWebamp;
