git checkout -b gh-pages

# Add all files
git add .

# Commit the changes
git commit -m "Push to gh-pages"

# Push the changes to GitHub
git push origin gh-pages

git checkout master
# Open the website in a web browser
#open "http://$(git config user.name).github.io/$(basename $(git rev-parse --show-toplevel))"

open "https://$(git config user.name).github.io/$(basename $(git remote get-url origin) .git)/"