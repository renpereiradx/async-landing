const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC1raAF6N6U-9cTCVirCYC1g&part=snippet%2Cid&order=date&maxResults=9";

const content = document.getElementById("content");
// const content = document.querySelector("#content");

  const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a495d617bdmshfb2b2726df2cf9fp1bd16djsn898b8714fa0f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const result = await response.json();
  return result;
}

(async function () {
  try {
    const videos = await fetchData(API);
    let view = `
      ${videos.items.map((video) =>
        `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0">
              </span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `
      ).slice(0, 4).join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);;
  }
})();

async function fetchData(url) {
  if (!url.startsWith('http')) {
    throw new Error('Invalid URL');
  }
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error('Something was wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something was wrong');
  }
}
