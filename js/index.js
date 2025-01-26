$(document).ready(function () {
    const lost = $("#lost");
    lost.hover(
        function () {
            if (lost.attr("src").includes("lost1.png")) {
                lost.attr("src", "../elements/lost2.png");
            }
        },
        function () {
            if (lost.attr("src").includes("lost2.png")) {
                lost.attr("src", "../elements/lost1.png");
            }
        }
    );

    const found = $("#found");
    found.hover(
        function () {
            if (found.attr("src").includes("found1.png")) {
                found.attr("src", "../elements/found2.png");
            }
        },
        function () {
            if (found.attr("src").includes("found2.png")) {
                found.attr("src", "../elements/found1.png");
            }
        }
    );
});

