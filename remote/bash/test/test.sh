#!/bin/bash
# ./test.sh -u 'John Smith' -a 25
while getopts u:a: flag
do
    case "${flag}" in
        u) username=${OPTARG};;
        a) age=${OPTARG};;
    esac
done
echo "Username: $username";
echo "Age: $age";