// functions to show and hide the create post modal

function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.create-post').classList.add('showCreatePost');
    
}

function hideModal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.create-post').classList.remove('showCreatePost');
    document.querySelector('.Edit-post').classList.remove('showEditPost');

}
 let arr = [];
 let oid=0;

 
// save the created post

function savePost(){
    let title = document.getElementById('heading').value;
    let content = document.getElementById('content').value;

    oid++;
    let obj = {};
    obj.id=oid;
    obj.title=title;
    obj.content=content;
    arr.push(obj);

    let postid=`post${oid}`;
    let post = document.createElement('div');
    post.setAttribute('class','post');
    post.setAttribute('id',postid);

    let heading = document.createElement('h3');
    heading.innerText=title;
    
    
    let postContent = document.createElement('p');
    postContent.innerText=content;
    
    let date=new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();
    
    post.appendChild(heading);
    post.appendChild(postContent);
    post.innerHTML +=`<button onclick="editPost(${oid-1})">Edit Post</button>`;
    post.innerHTML +=`<button onclick="deletePost(${postid})">Delete Post</button>`;
    
    post.innerHTML += `<span>Created On: ${day} at ${time}</span>`;

    document.getElementById('posts').appendChild(post);
    document.getElementById('heading').value="";
    document.getElementById('content').value = "";

    hideModal();
}
// on clicking delete post button

function deletePost(id){
    id.remove();
}
// on clicking edit post button

function editPost(oid){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.Edit-post').classList.add('showEditPost');

    document.getElementById('heading1').value=arr[oid].title;
    document.getElementById('content1').value = arr[oid].content;
    document.getElementById('Edit').setAttribute('data',arr[oid].id);
    document.getElementById('Delete-post').setAttribute('data',arr[oid].id)
}

// saving the edited Post

function saveEditedPost(){
    let title = document.getElementById('heading1').value;
    let content = document.getElementById('content1').value;
    let newId = Number(document.getElementById('Edit').getAttribute('data'));
    
    let obj = {};
    obj.id=newId;
    obj.title=title;
    obj.content=content;
    arr[newId-1]=obj;

    let post = document.getElementById(`post${newId}`);
    post.innerHTML="";

    let postid=`post${newId}`;
    let heading = document.createElement('h3');
    heading.innerText=title;
    
    
    let postContent = document.createElement('p');
    postContent.innerText=content;
    
    let date=new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();
    
    post.appendChild(heading);
    post.appendChild(postContent);
    post.innerHTML +=`<button onclick="editPost(${newId-1})">Edit Post</button>`;
    post.innerHTML +=`<button onclick="deletePost(${postid})">Delete Post</button>`;
    
    post.innerHTML += `<span>Updated on: ${day} at ${time}</span>`;
    
    hideModal();
    

}
// 
function deleteEditPost(){
    let newId = Number(document.getElementById('Edit').getAttribute('data'));
    let postid=`post${newId}`;

    document.getElementById(postid).remove();
    hideModal();

}

