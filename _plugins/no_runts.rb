module Jekyll
  module RuntFilter
    def no_runts(title)
      if(title)
        if title.strip.count(" ") >= 2
          firstPart = title.split[0...-1].join(" ")
          lastOpen =  firstPart.rindex("<")

          if lastOpen
            title.strip
          else
            title.split[0...-1].join(" ") + "&nbsp;#{title.split[-1]}"
          end
        else
          title.strip
        end
      else
        title
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::RuntFilter)
