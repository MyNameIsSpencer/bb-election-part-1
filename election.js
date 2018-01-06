document.addEventListener("DOMContentLoaded", function() {
  var candidate = document.querySelector('#jsonyStuff')
  // Imagination!
  $.ajax({
    url:  'https://bb-election-api.herokuapp.com/',
    method:  'GET' ,
    data:   {}  ,
    datatype: 'JSON',
  }).done(function(data){
    for (var i = 0; i < data.candidates.length; i ++) {
      var litem = document.createElement('li')
      var candi = data.candidates[i]
      litem.innerHTML = candi.name + '         Votes: ' + candi.votes
      candidate.append(litem)
    }
  });
});


// {"candidates":[{"id":"57781489020aca11009a4c4d","name":"Spongebob","votes":23585},{"id":"57781489020aca11009a4c4e","name":"Patrick","votes":9261},{"id":"57781489020aca11009a4c4f","name":"Squidward","votes":53442},{"id":"57781489020aca11009a4c50","name":"Sandy","votes":5694},{"id":"57781489020aca11009a4c51","name":"Gary","votes":33444}]}


//BOOOTOM
