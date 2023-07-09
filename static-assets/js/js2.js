window.clientConfig = {
    "vue": {
        "cdn": "/static-assets/build/js/vue.min.js",
        "requiredVueVersion": "2.6.10"
    },
    "widgets": {
        "si-squad-widget-layout-06": {
            "apis": {},
            "fileName": "js/squadDetails.js",
            "className": "squadDetails"
        },
        "si-player-widget-layout-06": {
            "apis": {},
            "fileName": "js/playerProfile.js",
            "className": "playerProfile"
        },
        "si-listing-widget-layout-01": {
            "apis": {
                "listingData": "/apiv4/listing?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent={{EXCLUDEENT}}&pgnum={{PGNUM}}&inum={{INUM}}&pgsize={{PGSIZE}}"
            },
            "fileName": "js/pressRelease.js",
            "className": "pressRelease"
        },
        "si-podcast-widget-layout-01": {
            "apis": {},
            "fileName": "js/podcastDetails.js",
            "className": "podcastDetails"
        },
        "si-fixtures-widget-layout-07": {
            "apis": {
                "matches": "{{DOMAIN_CLIENT}}/default.aspx?methodtype=3&client={{CLIENT}}&sport={{SPORT}}&league={{LEAGUE}}&timezone=0530&language={{LANGUAGE}}&{{FEEDTYPE}}={{FEEDVALUE}}"
            },
            "fileName": "js/fixtures_07.js",
            "className": "fixtures_07_1"
        },
        "si-standings-widget-layout-06": {
            "apis": {
                "standingsData": "{{DOMAIN_CLIENT}}/{{SPORT}}/{{FEED_TYPE}}/json/standing_{{SERIESID}}.json"
            },
            "fileName": "js/standings_06.js",
            "className": "standings_06_1"
        },
        "si-scorestrip-widget-layout-07": {
            "apis": {
                "matches": "{{DOMAIN_CLIENT}}/default.aspx?methodtype=3&client=2727d237c6&sport={{SPORT}}&league={{LEAGUE_CODE}}&timezone=0530&language={{LANG}}&{{FEED_TYPE}}={{FEED_VALUE}}",
                "liveUpdates": "{{DOMAIN_CLIENT}}/functions/wallstream/?sport_id={{SPORT}}&client_id=PO30XPfgTIePIt3A8JFsgg==&match_id={{MATCH_ID}}&page_size=10&page_no=0&session={{SESSION_ID}}&asset_type_id=9,20"
            },
            "fileName": "js/scorestrip_07.js",
            "className": "scorestrip_07_1"
        },
        "si-scorestrip-widget-layout-08": {
            "apis": {
                "matches": "{{DOMAIN_CLIENT}}/default.aspx?methodtype=3&client=2727d237c6&sport={{SPORT}}&league={{LEAGUE_CODE}}&timezone=0530&language={{LANG}}&{{FEED_TYPE}}={{FEED_VALUE}}",
                "liveUpdates": "{{DOMAIN_CLIENT}}/functions/wallstream/?sport_id={{SPORT}}&client_id=PO30XPfgTIePIt3A8JFsgg==&match_id={{MATCH_ID}}&page_size=20&page_no=0&session={{SESSION_ID}}"
            },
            "fileName": "js/scorestrip_08.js",
            "className": "scorestrip_08_1"
        },
        "si-statsdetail-widget-layout-03": {
            "apis": {
                "stats": "{{DOMAIN_CLIENT}}/cricket/static/json/{{SERIESID}}_{{STATSID}}_stats.json"
            },
            "fileName": "js/statsDetails.js",
            "className": "statsDetails"
        },
        "si-pressrelease-widget-layout-02": {
            "apis": {
                "pressReleaseListingData": "/apiv4/pressreleaselisting?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent={{EXCLUDEENT}}&pgnum={{PGNUM}}&inum={{INUM}}&pgsize={{PGSIZE}}"
            },
            "fileName": "js/pressRelease.js",
            "className": "pressRelease"
        },
        "si-cricketscorecard-widget-layout-02": {
            "apis": {
                "obo": "{{DOMAIN_CLIENT}}/cricket/live/json/{{GAMECODE}}_overbyover_{{SESSION}}.json",
                "photos": "{{DOMAIN_CLIENT}}/apiv3/assetlisting?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent={{EXCLUDEENT}}&pgnum={{PGNUM}}&inum={{INUM}}&pgsize={{PGSIZE}}&asset_id={{MATCH_ID}}&asset_type_id={{ASSET_TYPE_ID}}&is_detail={{IS_DETAIL}}",
                "squads": "{{DOMAIN_CLIENT}}/cricket/static/json/iplfeeds/{{LANG}}{{TEAMID}}_all_players_{{SERIESID}}.json",
                "videos": "{{DOMAIN_CLIENT}}/apiv3/assetlisting?entities={{ENTITIES}}&otherent={{OTHERENT}}&exclent={{EXCLUDEENT}}&pgnum={{PGNUM}}&inum={{INUM}}&pgsize={{PGSIZE}}&asset_id={{MATCH_ID}}&asset_type_id={{ASSET_TYPE_ID}}",
                "batsplit": "{{DOMAIN_CLIENT}}/cricket/live/json/{{GAMECODE}}_{{TYPE}}_splits_{{SESSION}}.json",
                "gameData": "{{DOMAIN_CLIENT}}/cricket/live/json/{{LANG}}{{GAMECODE}}.json",
                "commentary": "{{DOMAIN_CLIENT}}/functions/wallstream/?sport_id=1&client_id=PO30XPfgTIePIt3A8JFsgg==&match_id={{MATCHID}}&page_size={{PAGE_SIZE}}&page_no={{PAGE_NO}}&session={{SESSION}}",
                "commentary1": "{{DOMAIN_CLIENT}}/cricket/live/json/{{LANG}}{{GAMECODE}}_commentary_all_{{SESSION}}.json"
            },
            "fileName": "js/cricketscorecard_02.js",
            "className": "cricketscorecard_02_1"
        }
    },
    "versions": {
        "files": "1.5",
        "language": "1.0",
        "customNames": "1.9"
    },
    "commonApis": {
        "customNames": "static-assets/feeds/multisport/customNames.json?v=5.02",
        "translations": "static-assets/feeds/multisport/translations.json?v=5.02"
    },
    "imagePaths": {
        "teamImg": "/static-assets/images/teams/{{TEAM_ID}}.png?v=5.48",
        "staffImg": "/static-assets/images/support-staff/{{STAFF_ID}}.png?v=5.48",
        "pitchPath": "/static-assets/images/svg/pitch.svg?v=5.48",
        "playerImg": "/static-assets/images/players/{{PLAYER_ID}}.png?v=5.48",
        "countryImg": "/static-assets/images/countries/{{COUNTRY_ID}}.png?v=5.48",
        "defaultImage": "/static-assets/images/lazy-load.png",
        "nationalityImg": "/static-assets/images/flags/{{NATIONALITY_ID}}.png?v=5.48",
        "defaultProfileImage": "/static-assets/images/profile-picture.jpg?v=5.48"
    },
    "initConfig": {
        "DOMAIN": {
            "BETA": ["stg-rr.sportz.io"],
            "PROD": ["https://www.rajasthanroyals.com", "prd-rr.sportz.io"]
        }
    },
    "intervalApi": "{{DOMAIN_CLIENT}}/default.aspx?methodtype=3&client=2727d237c6&sport={{SPORT}}&league={{LEAGUE_CODE}}&timezone=0530&language={{LANG}}&gamestate=4",
    "isPushAllowed": false,
    "timeoutConfig": {
        "lazySizes": {
            "timeout": 2000
        },
        "initializeWebJs": {
            "timeout": 2000,
            "filesToExclude": ["/login", "/register", "/profile"]
        },
        "modifyClasslist": {
            "bodyTimeout": 1500
        },
        "initializeMoengage": {
            "timeout": 5000
        }
    },
    "intervalApiOld": "default.aspx?methodtype=3&client=2727d237c6&sport=1&league=0&timezone=0530&language=en&gamestate=4",
    "trackingConfig": {
        "moengage": {
            "app_id": "RHBHY8ZCZS1DD1YOJVDD73MC",
            "cluster": "DC_4",
            "debug_logs": 0
        }
    },
    "defaultLanguage": "en",
    "refreshInterval": 17
}