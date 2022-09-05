

class App {
    private path: (string) = ''

    import(pkg: (string)) {
        if (pkg.startsWith('App')) {
            pkg = pkg.replace(/^(App\.)/, this.path)
        }

        return require(pkg)
    }

    setPath(path: (string)) {
        this.path = path
    }
}