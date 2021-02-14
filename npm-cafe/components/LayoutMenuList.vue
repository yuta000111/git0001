<template>
    <div :class="wrapClass">
        <div :class="itemClass">
            <div :class="blockClass">
                <img
                    src="~/assets/リネーム/ogasuta458A8068_TP_V.jpg"
                    alt=""
                    :class="imageClass"
                />
                <div :class="dataClass">
                    <div class="font-bold text-xl mb-2">
                        NPMオリジナルパンケーキ
                    </div>
                    <p v-if="flagBody" class="text-base mb-2">
                        NPMカフェオリジナルパンケーキ
                        自然素材にこだわったパンケーキです。
                    </p>
                    <p class="text-gray-700 text-base mb-4">300円（税込）</p>
                </div>
            </div>
        </div>
        <div :class="itemClass">
            <div :class="blockClass">
                <img
                    src="~/assets/リネーム/ogasuta458A8068_TP_V.jpg"
                    alt=""
                    :class="imageClass"
                />
                <div :class="dataClass">
                    <div class="font-bold text-xl mb-2">
                        NPMオリジナルパンケーキ
                    </div>
                    <p v-if="flagBody" class="text-base mb-2">
                        NPMカフェオリジナルパンケーキ
                        自然素材にこだわったパンケーキです。
                    </p>
                    <p class="text-gray-700 text-base mb-4">300円（税込）</p>
                </div>
            </div>
        </div>
        <div :class="itemClass">
            <div :class="blockClass">
                <img
                    src="~/assets/リネーム/ogasuta458A8068_TP_V.jpg"
                    alt=""
                    :class="imageClass"
                />
                <div :class="dataClass">
                    <div class="font-bold text-xl mb-2">
                        NPMオリジナルパンケーキ
                    </div>
                    <p v-if="flagBody" class="text-base mb-2">
                        NPMカフェオリジナルパンケーキ
                        自然素材にこだわったパンケーキです。
                    </p>
                    <p class="text-gray-700 text-base mb-4">300円（税込）</p>
                </div>
            </div>
        </div>
        <div :class="itemClass">
            <div :class="blockClass">
                <img
                    src="~/assets/リネーム/ogasuta458A8068_TP_V.jpg"
                    alt=""
                    :class="imageClass"
                />
                <div :class="dataClass">
                    <div class="font-bold text-xl mb-2">
                        NPMオリジナルパンケーキ
                    </div>
                    <p v-if="flagBody" class="text-base mb-2">
                        NPMカフェオリジナルパンケーキ
                        自然素材にこだわったパンケーキです。
                    </p>
                    <p class="text-gray-700 text-base mb-4">300円（税込）</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutMenuList',
    props: {
        wrapClass: {
            type: String,
            default: '',
        },
        itemClass: {
            type: String,
            default: 'w-full mb-10 shadow-lg',
        },
        blockClass: {
            type: String,
            default:
                'md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4',
        },
        imageClass: {
            type: String,
            default: 'md:w-2/5',
        },
        dataClass: {
            type: String,
            default: 'w-7/12 px-6 py-4 mb:px-0 mb:px-0',
        },
        flagBody: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style></style>
