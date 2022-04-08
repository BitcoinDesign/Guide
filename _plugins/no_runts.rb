module Jekyll
  module RuntFilter
    def no_runts(title)
      if title.strip.count(" ") >= 2
        title.split[0...-1].join(" ") + "&nbsp;#{title.split[-1]}"
      else
        title.strip
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::RuntFilter)
