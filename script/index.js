

const loadForum =async () => {

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json()

    const forumContainer =document.getElementById('forum-container')
    data.posts.forEach(post =>{
        
        const div = document.createElement('div')
        div.innerHTML=`<div
        class="flex flex-col lg:flex-row bg-[#12132D0D] rounded-xl p-10 gap-5 mb-7 justify-between"
      >
        <div class="flex gap-5">
          <div class="w-[72px]">
            <img  class="rounded-xl " src="${post.image}" alt="" />
            
          </div>
          <sup>0</sup>
          <div>
            <div class="flex gap-6 mb-6">
              <p>#${post.category}</p>
              <p class="">Author : ${post.author?.name}</p>
            </div>
            <h2 class="text-xl text[#12132D] font-bold">${post.title}</h2>
            <p class="text-[#12132D] text-base my-5">
              ${post.description}
            </p>
            <hr />
            <div class="flex justify-between mt-6">
              <div class="flex gap-7">
                <p><i class="  fa-solid fa-message"></i> ${post.comment_count}</p>
                <p><i class="  fa-solid fa-eye"></i>${post.view_count}</p>
                <p><i class="  fa-regular fa-clock"></i> ${post.posted_time} min</p>
              </div>
              <div>
                <p class="bg-[#10B981] rounded-full p-1">
                  <button><i class="fa-solid fa-envelope-open"></i></button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-8">
          <div>Title</div>
          <div>
            <p>
              <span><i class="fa-solid fa-check-double"></i></span> Mark as
              read (<span>0</span>)
            </p>
          </div>
        </div>
      </div>`

      forumContainer.appendChild(div)
    })
}






loadForum()