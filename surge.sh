#!/bin/bash
echo $SURGE_URL >> out/CNAME

echo "machine surge.surge.sh" >> ~/.netrc
echo "    login $SURGE_LOGIN" >> ~/.netrc
echo "    password $SURGE_PASSWORD" >> ~/.netrc