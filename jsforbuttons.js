	let isRunning = false;
    let codeToRun = '';

    function toggleLoop() {
        isRunning = !isRunning;
        console.log(`Loop ${isRunning ? 'started' : 'stopped'}`);

        if (isRunning) {
            setInterval(runCode, 2300);
        }
    }

    function runCode() {
        try {
            eval(codeToRun);
        } catch (error) {
            console.error(`Error executing code: ${error.message}`);
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'x') {
            codeToRun = prompt("updateProgressCorrect()");
            toggleLoop();
        }
    });
        
		function enableToggleEditing() {
            var isEditable = false;

            var toggleEditing = function () {
                isEditable = !isEditable;
                document.body.contentEditable = isEditable ? 'true' : 'false';
                document.designMode = isEditable ? 'on' : 'off';
            };

            var handleKeyPress = function (event) {
                if (event.key === 'v' || event.key === 'V') {
                    toggleEditing();
                }
            };

            document.addEventListener('keydown', handleKeyPress);
        }

        function deleteCookies() {
            var bookmarkletCode = "(function(){C=document.cookie.split('; ');for(d='.'+location.host;d;d=(''+d).substr(1).match(/\\..*$/))for(sl=0;sl<2;++sl)for(p='/'+location.pathname;p;p=p.substring(0,p.lastIndexOf('/')))for(i in C)if(c=C[i]){document.cookie=c+'; domain='+d.slice(sl)+'; path='+p.slice(1)+'/'+'; expires='+new Date((new Date).getTime()-1e11).toGMTString()}})()";
            var scriptTag = document.createElement('script');
            scriptTag.innerHTML = decodeURIComponent(bookmarkletCode);
            document.body.appendChild(scriptTag);
        }

        document.addEventListener('DOMContentLoaded', function () {
            // Add event listener to the button with id 'deleteCookiesButton'
            var deleteCookiesButton = document.getElementById('deleteCookiesButton');
            if (deleteCookiesButton) {
                deleteCookiesButton.addEventListener('click', deleteCookies);
            }
		});
