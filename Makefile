REGISTRY = "--registry=http://registry.npm.taobao.org"

install:
	@npm install $(REGISTRY)

server:
	nodemon --watch ./ -e  .js,.html --harmony

watch:
	@./node_modules/.bin/watchify \
		public/javascripts/app.js \
		--debug \
		--transform reactify \
		--transform envify \
		-v \
		-o public/javascripts/bundle.js

build:
	@NODE_ENV=production ./node_modules/.bin/browserify \
		public/javascripts/app.js \
		--transform reactify \
		--transform envify \
		-o public/javascripts/bundle.js

autod: install
	@./node_modules/.bin/autod -w -e views,public/javascripts/bundle.js $(REGISTRY) --prefix="~"
	@$(MAKE) install

.PHONY: test