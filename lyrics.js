// Function to change the lyrics
 // Function to change the lyrics
      // Function to change the lyrics
      function modifyLyrics() 
      {
        var l1 = document.getElementById("lyrics");
        var vid = document.getElementById("a_classic");
        if (vid.currentTime< 25) 
        {
          l1.textContent = "Children have You ever met the Bogeyman before No, \
          of course You haven't for You're much too good, I'm sure; \
          Don't You be afraid of him if he should visit You He's a \
          great big coward, so I'll tell You what to do";
        } 
        else if (vid.currentTime > 25 && vid.currentTime < 41)
        {
          l1.textContent = "Hush, hush, hush, here comes the Bogeyman, \
                          Don't let him come too close to You, he'll catch you if he can. \
                          Just pretend that you're a crocodile \
                          And you will find that Bogeyman will run away a mile.";
        }
        else if (vid.currentTime > 41 && vid.currentTime < 56)
        {
          l1.textContent = "Say Shoo shoo and stick him with a pin \
                          Bogeyman will very nearly jump out of his skin \
                          Say buzz buzz just like the wasps that sting \
                          Bogeyman will think you are an elephant with wings";
        }
        else if (vid.currentTime > 56 && vid.currentTime < 72)
        {
          l1.textContent = "Hush, hush, hush, here comes the Bogeyman \
                          Tell him you've got soldiers in your bed \
                          For he will never guess that they are only made of lead";
        }
        else if (vid.currentTime > 79 && vid.currentTime < 95)
        {
          l1.textContent = "Say Hush hush, he'll think that you're asleep \
                          If you make a lovely snore away he'll softly creep \
                          Sing this tune you children one and all \
                          Bogeyman will run away, he'll think it's Henry Hall!";
        }
        else if (vid.currentTime > 95 && vid.currentTime < 110)
        {
          l1.textContent = "When the shadows of the evening creep across the sky \
                          And your Mummy comes upstairs to sing a lullaby \
                          Tell her that the bogeyman no longer frightens you \
                          Uncle Henry's very kindly told you what to do";
        }
        else if (vid.currentTime > 110 && vid.currentTime < 127)
        {
          l1.textContent = "Hush, hush, hush, here comes the Bogeyman \
                          Don't let him come too close to you, He'll catch you if he can. \
                          Just pretend your teddy bear's a dog \
                          Then shout out, 'Fetch him, Teddy!' and he'll hop off like a frog.";
        }
        else if (vid.currentTime > 134 && vid.currentTime < 151)
        {
          l1.textContent = "Say Meoow, pretend that you're a cat \
                          He'll think you may scratch him that make him fall down flat Just pretend he isn't really there\
                          You will find that Bogey man will vanish in thin air";
        }
        else if (vid.currentTime > 157 && vid.currentTime < 167)
        {
          l1.textContent = "Here's one way to catch him without fail\
                          Just keep a little salt with you\
                          and put it on his tail";
        }
      }
    
      
      

      // add event listener to the video
      var vid = document.getElementById("a_classic");
      vid.addEventListener("timeupdate", modifyLyrics);


 /*
      function modifyLyrics() 
      {
        var l1 = document.getElementById("lyrics");
        var vid = document.getElementById("a_classic");
        if (vid.currentTime< 25) 
        {
          l1.innerHTML = "Children have You ever met the Bogeyman before No, \
          				of course You haven't for You're much too good, I'm sure; \
          				 Don't You be afraid of him if he should visit You He's a \
          				 great big coward, so I'll tell You what to do";
        } 
        else if (vid.currentTime > 25 && vid.currentTime < 41)
        {
          l1.innerHTML = "Hush, hush, hush, here comes the Bogeyman, \
						  Don't let him come too close to You, he'll catch you if he can. \
						  Just pretend that you're a crocodile \
						  And you will find that Bogeyman will run away a mile.";
        }
        else if (vid.currentTime > 41 && vid.currentTime < 56)
        {
          l1.innerHTML = "Say Shoo shoo and stick him with a pin \
						  Bogeyman will very nearly jump out of his skin \
						  Say buzz buzz just like the wasps that sting \
						  Bogeyman will think you are an elephant with wings";
        }
        else if (vid.currentTime > 56 && vid.currentTime < 72)
        {
          l1.innerHTML = "Hush, hush, hush, here comes the Bogeyman \
						  Tell him you've got soldiers in your bed \
						  For he will never guess that they are only made of lead";
        }
        else if (vid.currentTime > 79 && vid.currentTime < 72)
        {
          l1.innerHTML = "Say Hush hush, he'll think that you're asleep \
						  If you make a lovely snore away he'll softly creep \
						  Sing this tune you children one and all \
						  Bogeyman will run away, he'll think it's Henry Hall!";
        }
        else if (vid.currentTime > 79 && vid.currentTime < 95)
        {
          l1.innerHTML = "Say Hush hush, he'll think that you're asleep \
						  If you make a lovely snore away he'll softly creep \
						  Sing this tune you children one and all \
						  Bogeyman will run away, he'll think it's Henry Hall!";
        }
        else if (vid.currentTime > 95 && vid.currentTime < 110)
        {
          l1.innerHTML = "When the shadows of the evening creep across the sky \
						  And your Mummy comes upstairs to sing a lullaby \
						  Tell her that the bogeyman no longer frightens you \
						  Uncle Henry's very kindly told you what to do";
        }
        else if (vid.currentTime > 110 && vid.currentTime < 127)
        {
          l1.innerHTML = "Hush, hush, hush, here comes the Bogeyman \
						  Don't let him come too close to you, He'll catch you if he can. \
						  Just pretend your teddy bear's a dog \
						  Then shout out, 'Fetch him, Teddy!' and he'll hop off like a frog.";
        }
        else if (vid.currentTime > 134 && vid.currentTime < 151)
        {
          l1.innerHTML = "Say Meoow, pretend that you're a cat \
						  He'll think you may scratch him that make him fall down flat\ 
						  Just pretend he isn't really there\
						  You will find that Bogey man will vanish in thin air";
        }
        else if (vid.currentTime > 157 && vid.currentTime < 167)
        {
          l1.innerHTML = "Here's one way to catch him without fail\
						  Just keep a little salt with you\
						  and put it on his tail";
        }
      }
      
      // add event listener to the video
      var vid = document.getElementById("a_classic");
      vid.addEventListener("timeupdate", modifyLyrics);
*/



/*
function modifyLyrics() {
  var l1 = document.getElementById("lyrics");
  var vid = document.getElementById("a_classic");
  if (vid.currentTime() < 10) {
    l1.firstChild.nodeValue = "This is the first part of the song";
  } 
  else if (vid currentTime() > 10)
  {
  	l1.firstChild.nodeValue = "This is the second part of the song";
  }
  else
  {
  	l1.firstChild.nodeValue = "I have no lyrics yet";
  }
}

// add event listener to the video
var playL = document.getElementByTagName("video");
playL.addEventListener("playing", modifyLyrics);


/*
var v = document.getElementsByTagName("video");
      var lyrics = document.getElementById("lyrics");
      if (v.currentTime > 5)
        lyrics.innerHTML = 5+7;
*/