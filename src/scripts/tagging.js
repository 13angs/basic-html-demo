// https://stackoverflow.com/questions/29643368/cannot-append-dom-element-to-div-node-uncaught-hierarchyrequesterror-failed-to
const script = `<script type="text/javascript">
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
})(window, document, "clarity", "script", "bfh9bldt1z");
</script>
`;
const node = document.getElementsByTagName('script')[0];
const cvtScript = new DOMParser().parseFromString(script, 'text/xml');
node.parentNode.insertBefore(cvtScript.documentElement, node);
// document.body.style.background = 'black';
