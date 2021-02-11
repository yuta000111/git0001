<template>
    <div>
        <header class="w-full absolute md:static bg-black px-2 py-2 z-50">
            <div class="md:max-w-3xl mx-auto md:flex md:items-center">
                <div
                    class="w-full md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16"
                >
                    <h1>
                        <a
                            href="/"
                            class="text-white text-sm font-bold leading-relaxed inliine-block mr-4 py-2 whitespace-no-wrap"
                            >MdN Cafe</a
                        >
                    </h1>
                    <div class="text-white md:hidden">
                        <button class="focus:outliine-none">
                            <svg
                                class="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                                />
                                <path
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <nav
                    class="w-full md:block absolute left-0 md:static bg-black md:bg-none z-20"
                >
                    <ul class="md:flex md:justify-end md:items-end">
                        <li class="w-full md:w-auto md:ml-5">
                            <a
                                href="/concept/"
                                class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >コンセプト</a
                            >
                        </li>
                        <li class="w-full md:w-auto md:ml-5">
                            <a
                                href="/menu/"
                                class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >メニュー</a
                            >
                        </li>
                        <li class="w-full md:w-auto md:ml-5">
                            <a
                                href="/nformation/"
                                class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                                >お知らせ</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div
            class="relative pt-16 pb-32 flex content-center items-center justify-center z-10"
            style="min-height: 75vh"
        >
            <div
                class="absolute top-0 w-full h-full bg-center bg-cover visual-home"
            >
                <span
                    id="blackOverlay"
                    class="w-full h-full absolute opacity-75"
                ></span>
            </div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div
                        class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
                    >
                        <div>
                            <h1
                                class="text-white font-semibold text-5xl text-shadow"
                            >
                                NUXT SMAPLE SITE DEMO
                            </h1>
                            <p class="mt-4 text-lg text-white text-shadow-md">
                                お知らせやメニューをmicroCMSを導入したDEMOサイトになります。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style="height: 70px; transform: translateZ(0px)"
            >
                <svg
                    class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        class="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.visual-home {
    background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
