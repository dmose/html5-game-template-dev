#############################################################################################
# NOTES:
#
# This Makefile assumes that you have the following installed, setup:
#
#  * node: http://nodejs.org
#  * Unixy shell (use msys on Windows)
#
#############################################################################################

TOOLS_DIR := ./tools
NODE_BIN := $(TOOLS_DIR)/node_modules/.bin

.PHONY: test
test: 
	$(NODE_BIN)/mocha $(MOCHAOPTS)

.PHONY: lint
lint:
	$(NODE_BIN)/jshint .

