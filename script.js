

// const accessToken = "BQA-39CEr2OLKQ3apAY4J0UCEk1lc7OOxxYCHYG9ihFKMvpJKaPed1wVpy1M5-9Rh5nrCdmTVCqGMeMlo71dvr6Z84GiYUJnq0zcvi1udgTQ0968K2TQjMv6yZTXk_zNmwN1onBYXfbUqQJg2lz6WLj3Vs4X8xlsYqGHX_EuH0ZHfqopU24";

// const accessToken = "BQD33Pb2LXzesroWETO6nwHZls927ZTpbKFT4YAcxC6PdEEOevzKnIyvdQOtyzbfbYqSMlTUh1Iz34T85fThL0szIpO_-29H0-VIVsmJc-XIEMlNamSIT5OC9SIcNzXL3DySneXQLiT1RDe4UqWQDf6rA4dhEN8rLkFOsc7kdwEisDjRmbg"

fetch(
  "https://api.spotify.com/v1/users/31hdfl3x35themod3app4r5k3wuq/playlists",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  }
)
  .then((data) => data.json())
  .then((data) => {
    // console.log(data.items[0].images[0].url);
    console.log(data.items)
    let contents = document.querySelector('.contents');
    data.items.forEach((item) => {
        const playlist = document.createElement('div');
        playlist.className = 'row playlist';

        playlist.innerHTML = `
        <div class='col'><img class="album-cover img-responsive" src='${item.images[0].url}'></div>
        <div class='col playlist-name'><h3>${item.name}</h3></div>
        `

        contents.append(playlist);

        const albumImg = document.createElement('img');
        albumImg.src = item.images[0].url;
        albumImg.className = 'col';

        const albumName = document.createElement('div');
        albumName.className = 'col';
        albumName

        // contents.appendChild(albumImg);
    })

  });
