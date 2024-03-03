const loadForum = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();

  const forumContainer = document.getElementById("forum-container");
  data.posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `<div
        class="mb-7 w-full lg:w-[90%]"
      >
        <div class="flex gap-4 lg:gap-20  bg-[#12132D0D]  rounded-xl p-10 ">
        <div class="indicator">
        <span class="indicator-item badge badge-secondary bg-green-600 border-none"></span> 
        <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src="${post.image}" alt=""></div>
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
                <p><i class="  fa-solid fa-message"></i> ${post.comment_count}</p>
                <p><i class="  fa-solid fa-eye"></i>${post.view_count}</p>
                <p><i class="  fa-regular fa-clock"></i> ${post.posted_time} min</p>
              </div>
              <div>
                <p class="bg-[#10B981] rounded-full p-1">
                  <button onclick="title()" ><i class="fa-solid fa-envelope-open"></i></button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    forumContainer.appendChild(div);
  });
};
const postLoader = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );
  const data = await res.json();
  const postContainer = document.getElementById("post-container");
  data.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `    <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${item.cover_image}" alt="" class="rounded-xl" />
  </figure>
  
  <div class="card-body ">
    <p> <span class="mr-2"><i class="fa-solid fa-briefcase"></i></span>${item?.posted_date}</p>
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
    <div class="flex gap-6">

      <div class="w-16 "><img class="rounded-full" src="${item.profile_image}" alt=""></div>
      <div>
        <h4>${item.author.name}</h4>
        <p>${item.author?.designation}</p>
      </div>
    </div>
  </div>
</div>`;

    postContainer.appendChild(div);
  });
};

const title = (post) => {
  console.log("click");
};

postLoader();

loadForum();
