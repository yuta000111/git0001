<template>
    <layout-wrapper>
        <layout-visual title="MENU" :height="40" visual="visual-menu" />
        <div class="contaier w-full mx-auto pt-20 pb-20 px-6 md:px-0">
            <div class="mb-20">
                <layout-menu-list />
            </div>
            <base-button name="トップへ戻る" link="/"></base-button>
        </div>
    </layout-wrapper>
</template>

<script>
import LayoutMenuList from '../../components/LayoutMenuList.vue';
export default {
    components: { LayoutMenuList },
};
</script>

<style></style>
