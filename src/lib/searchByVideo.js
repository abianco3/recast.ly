var searchByVideo = (key, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos',
    {
      id: key,
      part: 'statistics',
      key: window.YOUTUBE_API_KEY
    })
  .done(callback)
  .fail((data) => console.error.data(err));
};