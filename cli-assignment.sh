#!/bin/bash
#Check array length
if [[ ! $# -gt 1 ]];
  then
    echo "Missing correct path. Try ./cli-assignment.sh then <path-name> space <components>"
    exit
fi

#check the directory exists
[[ ! -d $1 ]] && echo 'This path does not exist, try correct path' && exit

#function definition
function getComponent () {
  find $1 -name "*.tsx" -exec grep -r $2 {} \; | wc -l | xargs echo "$2 - "
}

if [[ $# -ge 2 ]]; then
  for name in "${@:2}"; do
    getComponent $1 $name
  done
fi