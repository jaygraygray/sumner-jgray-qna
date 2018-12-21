import "./styles.css";
import formatAnswers from "./format/questions";

document.getElementById("app").innerHTML = `
<h1>Hola Juan!</h1>
<div>
We can use this sandbox for QnA and testing out random stuff.
<p/>
I'll set up a resources page, which'll be static HTML and just links to useful articles and shit.
<p/>
It also might be a good idea to group our QnA sessions by topic or date.
<p/>
How do you feel about a basic format like this?
<div class="answers">
    <div><b>Question</b></div>
    <div><b>Answer</b></div>
</div>
${formatAnswers()}
</div>
`;
