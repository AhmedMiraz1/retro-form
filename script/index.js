const handleForumPost = (data) => {
  const forumContainer = document.getElementById("forum-container");
  forumContainer.innerHTML = "";
  data.posts.forEach((item) => {
    const post = item;

    const div = document.createElement("div");
    div.innerHTML = `<div
        class="mb-7 w-full lg:w-[90%]"
      >
        <div class="flex gap-4 lg:gap-20  bg-[#12132D0D]  rounded-xl p-10 ">
        <div class="indicator">
        <span class="indicator-item badge ${
          post.isActive ? "bg-green-500" : "bg-red-500"
        }"></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center "><img class="rounded-2xl" src="${
          post.image
        }" alt=""></div>
      </div>
          <div>
            <div class="flex justify-evenly mb-6">
              <p>#${post.category}</p>
              <p class="">Author : ${post.author?.name}</p>
            </div>
            <h2 class="text-xl text[#12132D] font-bold">${post.title}</h2>
            <p class="text-[#12132D] text-base my-5 ">
              ${post.description}
            </p>
            <hr />
            <div class="flex  justify-between  mt-6">
              <div class="flex gap-7 ">
                <p><i class="  fa-solid fa-message"></i> ${
                  post.comment_count
                }</p>
                <p><i class="  fa-solid fa-eye"></i>${post.view_count}</p>
                <p><i class="  fa-regular fa-clock"></i> ${
                  post.posted_time
                } min</p>
              </div>
              <div>
                <p class="bg-[#10B981] rounded-full p-1">
                <button onclick="handlePostTitle('${post.title}', ${
      post.view_count
    })" ><i class="fa-solid fa-envelope-open"></i></button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById("loading-spinner").classList.add("hidden");
    // document.getElementById("loading-spinner2").classList.add("hidden");
    forumContainer.appendChild(div);
  });
};

let count = 0;

const handlePostTitle = (title, views) => {

  // console.log(handlePostTitle)
  count++;

  const titleCount = document.getElementById("title-count");
  const div = document.createElement("div");
  div.innerHTML = `<div class="flex my-3 justify-between"><h2>${title}</h2>
  <p><i class="fa-regular fa-eye"></i> ${views}</p></div>`;

  titleCount.appendChild(div);

  countComment("read-as", count);
};

function countComment(id, value) {
  document.getElementById(id).innerText = value;
}

fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  .then((res) => res.json())
  .then(handleForumPost);

const handelSearch = async () => {
  const category = document.getElementById("search-box").value;
  if (!category) return;
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  handleForumPost(data);
};

fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  .then((res) => res.json())
  .then((data) => {
    const postContainer = document.getElementById("post-container");
    data.forEach((item) => {
      // document.getElementById("loading-spinner2").classList.add("hidden");
      const div = document.createElement("div");

      div.innerHTML = `<div class="card w-96 h-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="${item.cover_image}" alt="" class="rounded-xl" />
        </figure>
        
        <div class="card-body ">
          <p> <span class="mr-2"><i class="fa-solid fa-briefcase"></i></span>${
            item?.author?.posted_date || "No publish date"
          }</p>
          <h2 class="card-title">${item.title}</h2>
          <p>${item.description}</p>
          <div class="flex gap-6">

            <div class="w-16 "><img class="rounded-full" src="${
              item.profile_image
            }" alt=""></div>
            <div>
              <h4>${item.author.name}</h4>
              <p>${item?.author?.designation || "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>
      `;
      document.getElementById("loading-spinner2").classList.add("hidden");
      postContainer.appendChild(div);
    });
  });
