#!/usr/bin/env bash

/Applications/Firefox.app/Contents/MacOS/firefox --new-tab "https://$(git rev-parse --abbrev-ref HEAD | tr / -)-mjrussell-net.mjrussell91.workers.dev"
