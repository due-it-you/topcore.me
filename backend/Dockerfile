ARG RUBY_VERSION=3.4.4
FROM ruby:$RUBY_VERSION-slim AS base

WORKDIR /app

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
      curl libjemalloc2 libvips postgresql-client \
      git build-essential libpq-dev libyaml-dev && \
    rm -rf /var/lib/apt/lists/*

ENV RAILS_ENV=production \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development test"

FROM base AS build
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

FROM base
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /app /app

ENTRYPOINT ["/app/bin/docker-entrypoint"]

EXPOSE 3000
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]
