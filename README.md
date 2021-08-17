## Introduction
A mobile application, where users can upload a zip file of data science resumes, and the model ranks the resume based on six primary features. The system was trained on Word2Vec model.
1. Read skills.txt file and made a list of sentences
2. Removed stop words from list, then created tokens of each string in a list which resulted in a 2d list
3. Then detected common phrases 
4. Train the model on those phrases using Word2Vec.
5. Save model

## Backend API: Django
Now these urls patterns are defined in app firstpage views.py, each function represents each url pattern. LoginAPI and RegisterApi uses serializer class. 
- RegisterAPI expects username, password and email and returns a user (with id, username and email) along with a unique token. 
- LoginAPI expects a username and password, and it will return expiry and token number of that user. 
- LogoutAPI expects the token of user and will not return anything (back to login screen). 
- Pdfextract() expects a file path, reads the pdf, no of pages in pdf, then iterate through the pages and get its content. 
- create_profile() loads the word2vec model, extracts pdf by calling function pdfextract() then replaces line end and converts the fetched pdf content to lowercase. 
- Most_similar() study material: https://tedboy.github.io/nlps/generated/generated/gensim.models.Word2Vec.most_similar.html
https://stackoverflow.com/questions/50275623/difference-between-most-similar-and-similar-by-vector-in-gensim-word2vec
- PhraserMatcher(nlp.vocab): https://spacy.io/api/phrasematcher
- Matcher(doc): https://spacy.io/api/matcher
Reading keywords as dataframe and returning dataframe
- scoreFile() expects a zip file from front end, gets its file path and send it to create_profile.
Create_profile returns the keywords based on its resume then returns a data frame which is converted to a dictionary as response to frontend.
