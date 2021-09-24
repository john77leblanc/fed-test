const reportsWidget = {
  options: {
    containerSelector: '.reports',
    template: (
      `{{#.}}
        <article class="reports_item">
          <a href="{{cover}}" target="_blank">
            <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" loading="lazy" />
          </a>
          <footer class="reports_docs">
            {{#documents}}
              <h3 class="reports_title">
                <a href="{{url}}" target="_blank">
                  {{title}}
                  <span class="details">({{file_size}} {{file_type}})</span>
                </a>
              </h3>
            {{/documents}}
          </footer>
        </article>
      {{/.}}`
    )
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    let inst = this,
      options = inst.options;

    $(options.containerSelector).html(Mustache.render(options.template, reports));
  }
};

reportsWidget.init();