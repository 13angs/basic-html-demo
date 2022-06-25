// https://stackoverflow.com/questions/29643368/cannot-append-dom-element-to-div-node-uncaught-hierarchyrequesterror-failed-to

function loadData() {
  const script = `<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        console.log('success');
    })(window, document, "clarity", "script", "bfh9bldt1z");
    </script>
    `;

  const text = 'hello world';

  // replace the space with empty string
  console.log(text.replace(/\s/g, ''));
  const node = document.getElementsByTagName('script')[0];
  const cvtScript = new DOMParser().parseFromString(script, 'text/xml');
  node.parentNode.insertBefore(cvtScript.documentElement, node);
}

window.onload = loadData;
// document.body.style.background = 'black';
