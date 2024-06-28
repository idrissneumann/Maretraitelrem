#!/bin/bash

REPO_PATH="${PATH_HOME}/maretraitelrem/"

cd "${REPO_PATH}" && git pull origin main || :
git push github main -f
exit 0
