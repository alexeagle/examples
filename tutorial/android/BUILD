load("@gmaven_rules//:defs.bzl", "gmaven_artifact")
load(":nativescript.bzl", "static_binding_generator")

genrule(
    name = "modified_jsparser.js",
    srcs = ["@tns_android//:build-tools/jsparser/js_parser.js"],
    outs = ["js_parser.js"],
    cmd = "sed 's#$${__dirname}/..#$${process.cwd()}#' $< > $@",
)

sh_binary(
    name = "sbg_sh",
    srcs = ["sbg.sh"],
)

ASSETS = glob([
        "src/main/java/com/google/bazel/example/android/assets/**",
    ],
    exclude=[
        "src/main/java/com/google/bazel/example/android/assets/**/*.ts",
        "src/main/java/com/google/bazel/example/android/assets/**/*.js.map",
        "src/main/java/com/google/bazel/example/android/assets/**/*.metadata.json",
        "src/main/java/com/google/bazel/example/android/assets/app/tns_modules/rxjs/_esm5/**",
        "src/main/java/com/google/bazel/example/android/assets/app/tns_modules/rxjs/_esm2015/**",
        "src/main/java/com/google/bazel/example/android/assets/app/tns_modules/@angular/*/esm2015/**",
        "src/main/java/com/google/bazel/example/android/assets/app/tns_modules/@angular/*/esm5/**",
        "src/main/java/com/google/bazel/example/android/assets/app/tns_modules/@angular/common/locales/**",
    ],
)

DEPS = [
    ":nativescript_lib",
    ":nativescript_widgets",
    gmaven_artifact("com.android.support:multidex:aar:1.0.2"),
    gmaven_artifact("com.android.support:support-v4:aar:26.0.0-alpha1"),
    gmaven_artifact("com.android.support:support-core-ui:aar:26.0.0-alpha1"),
    gmaven_artifact("com.android.support:appcompat-v7:aar:26.0.0-alpha1"),
    gmaven_artifact("com.android.support:design:aar:26.0.0-alpha1"),
]

static_binding_generator(
    name = "static_bindings",
    deps = DEPS + ["@androidsdk//:platforms/android-28/android.jar"],
    assets = ASSETS,
    assets_dir = "src/main/java/com/google/bazel/example/android/assets/app",
)

android_library(
    name = "compiled_static_bindings",
    srcs = [
      "@tns_android//:static_binding_java",
      ":static_bindings",
    ],
    deps = DEPS,
)


# The final binary rule, which builds the APK and sets the application manifest,
# as well as any other resources needed by the application.
# The package for the R class for resources is normally inferred from the
# directory containing the BUILD file, but this BUILD file is not under a java
# directory, so we specify it manually.
android_binary(
    name = "android",
    custom_package = "com.google.bazel.example.android",
    srcs = [],
    manifest = "src/main/java/com/google/bazel/example/android/AndroidManifest.xml",
    resource_files = glob(["src/main/java/com/google/bazel/example/android/res/**"]),
    visibility = ["//visibility:public"],
    assets = ASSETS,
    assets_dir = "src/main/java/com/google/bazel/example/android/assets",
    deps = [
        ":activities",
        ":nativescript_lib",
        ":nativescript_widgets",
        ":compiled_static_bindings",
        gmaven_artifact("com.android.support:multidex:aar:1.0.2"),
        gmaven_artifact("com.android.support:support-v4:aar:26.0.0-alpha1"),
        gmaven_artifact("com.android.support:support-core-ui:aar:26.0.0-alpha1"),
        gmaven_artifact("com.android.support:appcompat-v7:aar:26.0.0-alpha1"),
        gmaven_artifact("com.android.support:design:aar:26.0.0-alpha1"),
    ],
)

# A library which compiles some Java sources and associated resources.
# Because it has resources, it requires a manifest.
android_library(
    name = "activities",
    srcs = glob(["src/main/java/com/google/bazel/example/android/activities/*.java"]),
    custom_package = "com.google.bazel.example.android.activities",
    manifest = "src/main/java/com/google/bazel/example/android/activities/AndroidManifest.xml",
    resource_files = glob(["src/main/java/com/google/bazel/example/android/activities/res/**"]),
)

aar_import(
    name = "nativescript_lib",
    aar = "src/main/java/com/google/bazel/example/android/libs/runtime-libs/nativescript-optimized-with-inspector.aar",
)
aar_import(
    name = "nativescript_widgets",
    aar = "src/main/java/com/google/bazel/example/android/libs/runtime-libs/widgets-release.aar"
)