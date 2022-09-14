#!/bin/bash

declare -a arr=( 
	"ashik"
	"hardik"
	"ragesh"
	)

## Create branches for users
echo "Start creating branches...!"
for i in "${arr[@]}"
do
	git checkout -b $i
	echo $i
done
git push origin --all


# ### Cleanup Delete all branches
# echo "Start cleanup...!"
# git checkout master
# for i in "${arr[@]}"
# do
# 	git push origin -d $i 
# done
