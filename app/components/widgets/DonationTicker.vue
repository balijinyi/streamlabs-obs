<template>
<widget-window v-if="wData" ref="layout" v-model="tabName">

  <div slot="description">
    {{ $t('Show off your most recent donations to your viewers.') }}
  </div>

  <div slot="settings">
    <form-group :title="$t('Message Format')" type="text" v-model="wData.settings.message_format" :metadata="{ tooltip: messageFormatTooltip }" />
    <form-group :title="$t('Max Donations')" type="number" v-model="wData.settings.max_donations" :metadata="{ tooltip: maxDonationsTooltip }" />
    <form-group :title="$t('Text Scroll Speed')" type="slider" v-model="wData.settings.scroll_speed" :metadata="{ max: 10, interval: 1, tooltip: scrollSpeedTooltip }" />
    <form-group :title="$t('Background Color')" type="color" v-model="wData.settings.background_color" :metadata="{ tooltip: backgroundColorTooltip }" />
    <form-group :title="$t('Font')" type="fontFamily" v-model="wData.settings.font" />
    <form-group :title="$t('Font Size')" type="fontSize" v-model="wData.settings.font_size" :metadata="{ tooltip: fontSizeTooltip }" />
    <form-group :title="$t('Font Weight')" type="slider" v-model="wData.settings.font_weight" :metadata="{ min: 300, max: 900, interval: 100, tooltip: fontWeightTooltip }" />
    <form-group :title="$t('Text Color')" type="color" v-model="wData.settings.font_color" :metadata="{ tooltip: textColorTooltip }" />
    <form-group :title="$t('Name Text Color')" type="color" v-model="wData.settings.font_color2" :metadata="{ tooltip: nameColorTooltip }" />
    <form-group :title="$t('Amount Text Color')" type="color" v-model="wData.settings.font_color3" :metadata="{ tooltip: amountColorTooltip }" />
  </div>

  <div slot="HTML" >
    <code-editor v-model="wData" :metadata="{ type: 'html' }"/>
  </div>

  <div slot="CSS" >
    <code-editor v-model="wData" :metadata="{ type: 'css' }"/>
  </div>

  <div slot="JS" >
    <code-editor v-model="wData" :metadata="{ type: 'js' }"/>
  </div>

  <div slot="test" >
    <test-buttons :testers="['Donation']"/>
  </div>
</widget-window>
</template>

<script lang="ts" src="./DonationTicker.vue.ts"></script>
