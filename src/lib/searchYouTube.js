var searchYouTube = ({query = 'react', max = '5', key = window.YOUTUBE_API_KEY}, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: {
      part: 'snippet',
      q: query,
      maxResults: max,
      key: key,
      videoEmbeddable: 'true',
      type: 'video'
    },

    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.error(error.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;
