package <%= appPackage %>;

import com.joxad.easydatabinding.activity.ActivityBase;
import <%= appPackage %>.R;
import <%= appPackage %>.BR;

/**
 * Generated by generator-android-template
 */
public class <%= activityName %> extends ActivityBase<<%= activityName %>Binding, <%= activityName %>VM> {
    @Override
    public int data() {
        return BR.templateActivityVM;
    }

    @Override
    public int layoutResources() {
        return R.layout.template_activity;
    }

    @Override
    public ActivityHomeVM baseActivityVM(ActivityHomeBinding binding, Bundle savedInstanceState) {
        return new ActivityTemplateVM(this, binding);
    }
}
