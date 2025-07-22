source "https://rubygems.org"

# Jekyll core
gem "jekyll", "~> 4.4"

# Jekyll theme
gem "minima", "~> 2.5"

# Group: Jekyll plugins
group :jekyll_plugins do
  gem 'jekyll-redirect-from'
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag"
  gem 'html-proofer'
  gem 'jekyll-sitemap'
end

# Windows-specific: timezone support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Windows-specific: file watching performance
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Required for Ruby 3+ to serve the site locally
gem "webrick", "~> 1.8"