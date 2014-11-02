// Intentionally disabled here because it is invoked from the given HTML's context
//var selector = ".birds";

function traverse(selector)
{
    // dummy validation
    if(!selector) {
        throw new Error('Missing the required selector parameter');
    }

    // Sample for looping through nodeList result using forEach
    [].forEach.call(
        document.querySelectorAll(selector + " > *"), // Just for fun :)
        function(node) {
            var indent = '';
            nodeSelector(node, indent);
        }
    );

    function nodeSelector(node, indent) {
        var nodeId = node.getAttribute("id");
        var nodeIdTxt = !nodeId ? '' : ' id="' + nodeId + '"';
        var nodeClass = node.getAttribute("class");
        var nodeClassTxt = !nodeClass ? '' : ' class="' + nodeClass + '"';

        console.log(indent + node.nodeName + ":" + nodeIdTxt + nodeClassTxt);

        if(node.hasChildNodes()) {
            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                if (child.nodeType === document.ELEMENT_NODE) {
                    nodeSelector(child, indent + '    ');
                }
            }
        }
    }
}