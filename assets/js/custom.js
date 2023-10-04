var portal = "it";
var theme = "3-Samsung_S10";
var template = "surbox";
var brand_country = "Spain";
var dayNames = Array(
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
);
var monthNames = new Array(
  "Janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
);
var img_regalo = "/assets/img/img-2.png";
var minutos_y = "minutos e ";
var segundos = "segundos ";
var url_f = "";
var modalOptions = {
  backdrop: "static",
  keyboard: false,
};
var adS = [
  "bG9jYWwucHJlbG9hZGVycy5jb20=",
  "bG9jYWwucHJlbG9hZGVycy5jb20=",
];

//#region Facebook Pixel Code
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod
      ? n.callMethod.apply(n, arguments)
      : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "//connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "{lander.param:fbpixel}");
fbq("track", "PageView");

//#endregion Facebook Pixel Code

//#region anwer
const answers = {};

function updateAnswers(questionClass, value) {
  answers[questionClass] = value;
}

document.querySelectorAll('.survey_button').forEach(button => {
  button.addEventListener('click', function() {
    const questionClass = this.classList[1];
    const value = this.innerText; 
    answers[questionClass] = value; // 
  });
});

document.getElementById('p_modal_button3').addEventListener('click', event => 
  console.log(answers)
);
//#endregion

//#region comments
document.addEventListener('DOMContentLoaded', function() {
  function addComment(commentText, userName, userAvatar) {
      const commentsContainer = document.getElementById('comments-container');
  
      const commentElement = document.createElement('div');
      commentElement.classList.add('comments');
  
      const profileDiv = document.createElement('div');
      profileDiv.classList.add('profile');
  
      const avatarImg = document.createElement('img');
      avatarImg.src = userAvatar;
      profileDiv.appendChild(avatarImg);
  
      commentElement.appendChild(profileDiv);
  
      const commentContent = document.createElement('div');
      commentContent.classList.add('comment-content');
  
      const nameParagraph = document.createElement('p');
      nameParagraph.classList.add('name');
      nameParagraph.textContent = userName;
      commentContent.appendChild(nameParagraph);
  
      const textParagraph = document.createElement('p');
      textParagraph.textContent = commentText;
      commentContent.appendChild(textParagraph);
  
      commentElement.appendChild(commentContent);
  
      commentsContainer.appendChild(commentElement);
  }
  
  function previewAvatar() {
      const avatarInput = document.getElementById('avatar-input');
      const avatarPreview = document.getElementById('avatar-preview');
      
      if (avatarInput.files && avatarInput.files[0]) {
          const reader = new FileReader();
      
          reader.onload = function(e) {
              avatarPreview.src = e.target.result;
          };
      
          reader.readAsDataURL(avatarInput.files[0]);
      }
  }
  
  document.getElementById('avatar-input').addEventListener('change', previewAvatar);
  
  document.getElementById('comment-button').addEventListener('click', function() {
      const commentText = document.getElementById('comment-text').value;
      const userName = document.getElementById('name-input').value;
      const userAvatar = document.getElementById('avatar-preview').src;
  
      if (commentText.trim() !== '') {
          addComment(commentText, userName, userAvatar);
  
          document.getElementById('comment-text').value = '';
          document.getElementById('name-input').value = '';
          document.getElementById('avatar-input').value = '';
          document.getElementById('avatar-preview').src = '/assets/img/user.png';
          document.getElementById('comment-form').classList.remove('comment-form__on');
      }
  });
});

//#endregion


const Form = document.getElementById('comment-form');

function commentForm() {
  Form.classList.add('comment-form__on');
}

