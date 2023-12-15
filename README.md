<h1>SYNthia</h1>
Source code for the SYNthia interface used in "SYNthia: An Interface Concept for Writing With Large Language Models", a paper written for Harvard's CS279r.

<h2>Overview</h2>
SYNthia’s features and functionalities are embedded in a web application developed using React.js. The suggestion of words is
supported through the use of OpenAI’s API configured to prompt instances of GPT-4, a large language model created by OpenAI.

<h2>Design Goals</h2>h2>
Incorporating ideas extracted from related work, SYNthia attempts to fulfill three primary objectives: coherence to context,
steerability of suggestions, and divergent outcomes. Coherence to context states that systems
should "provide suggestions relevant to the task at hand". Users who use words in particular contexts may require suggestions
to reflect that context, or to respect a particular voice or tone, among other possible considerations. In order to fulfill this coherency
to context, systems accepting user input should demonstrate steerability. Systems that are steerable adapt their outputs to the
input of their users, creating an environment of co-creativity. Systems supporting divergent outcomes provide several valid
candidates for suggestions, attempting to support variation in writers’ work.

To support coherency to context, SYNthia always incorporates all context provided by users to produce the most relevant
suggestions possible when given one or more statements of clarification. By allowing users to directly express the types of
suggestions they are seeking, SYNthia is able to effectively remain coherent to their context by providing suggestions that are
relevant to the description of context provided.

To support divergent outcomes, SYNthia provides users with the option to adjust the number of suggestions provided, supporting
up to 10 different word suggestions at a time. The GPT-4 prompt provided to SYNthia specifies that these suggestions should be
distinct, and this is reflected in the lack of in-list duplicates and variety of words provided in every generation of suggestions,
giving users a wide breadth of candidate words from which to choose from
